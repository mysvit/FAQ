using System;
using System.Collections.Generic;
using System.Reflection;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Parameters> input = new List<Parameters>();
            var type1 = new Parameters
            {
                Param = "{{\"fieldId\": \"CoreDateTime\", \"dateTime\": \"2017-04-05T04:00:00Z\"}}",
                Value = "Type exist"
            };

            input.Add(new Parameters
            {
                Param = "First param",
                Value = "Parameters value with parent",
                Parent = type1
            });

            input.Add(new Parameters
            {
                Param = "Second param",
                Value = "Parameters value empty",
            });

            RecursiveSearchField(input);

            Console.ReadKey();
        }
        
        public static void RecursiveSearchField(object obj)
        {
            if (obj == null)
                return;
            dynamic objD = obj;

            //For Collection
            Type[] ntype = objD.GetType().GetNestedTypes(BindingFlags.Static |
                                                         BindingFlags.Instance |
                                                         BindingFlags.Public |
                                                         BindingFlags.NonPublic);
            int i = 0;
            foreach (Type nt in ntype)
            {
                RecursiveSearchField(objD[i]);
                i++;
            }

            //For Fields
            FieldInfo[] props = objD.GetType().GetFields();
            foreach (FieldInfo prp in props)
            {
                //Try to find coreTypeId identificator
                var coreTypeValue = prp.GetValue(objD) as string;
                if (coreTypeValue != null && coreTypeValue.Contains("fieldId"))
                {
                    //Cast object to CoreType
                    prp.SetValue(obj, "++++++++TEST+++++");
                    Console.WriteLine("Modify object: {0} {1}", prp.Name, "++++++++TEST+++++");
                }
                else
                {
                    //Recursive call if type not empty string
                    if (coreTypeValue != string.Empty)
                        RecursiveSearchField(prp.GetValue(objD));
                }
            }
        }
    }


    class Parameters
    {
        public object Param;
        public string Value;
        public object Parent;
    }
}
