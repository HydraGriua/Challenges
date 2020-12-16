using System;
using System.IO;
using System.Linq;
namespace Day2
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] aux;
            char letra;
            string oracion;
            int min,max, contador=0;
            bool flag1=false, flag2=false;
            string[] lines = File.ReadAllLines("input2.txt");    
            foreach (string line in lines)  {
                aux = line.Split(' ');          
                letra = aux[1][0];
                oracion = aux[2];
                min = Convert.ToInt32(aux[0].Split('-')[0]);                
                max = Convert.ToInt32(aux[0].Split('-')[1]);

                if(oracion[min-1] == letra)
                {
                    flag1 = true;                   
                }
                if(oracion[max-1] == letra)
                {
                    flag2 = true;                   
                }
                if((flag1 && !flag2) || (!flag1 && flag2))
                {
                    contador++;
                }
                flag1 = false;   
                flag2 = false;         
            }
            Console.WriteLine(contador);
        }
    }
}