using System;
using System.IO;
using System.Linq;
namespace Day2
{
    class Program1
    {
        static void Main1(string[] args)
        {
            string[] aux;
            char letra;
            string oracion;
            int min,max, contadoraux, contador=0;
            string[] lines = File.ReadAllLines("input2.txt");    
            foreach (string line in lines)  {
                aux = line.Split(' ');          
                letra = aux[1][0];
                oracion = aux[2];
                min = Convert.ToInt32(aux[0].Split('-')[0]);                
                max = Convert.ToInt32(aux[0].Split('-')[1]);
                contadoraux = oracion.ToCharArray().Count(c => c == letra);
                if(contadoraux >= min && contadoraux <= max){
                    contador+=1;
                }
            }
            Console.WriteLine(contador);
        }
    }
}