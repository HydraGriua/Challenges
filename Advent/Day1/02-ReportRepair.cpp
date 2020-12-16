//#include <bits/stdc++.h>
#include <vector>
#include <iostream>
#include <fstream>
using namespace std;
struct ga{
    long int suma;
    int num1, num2;    
};
int main() {
    vector<int>* numeros = new vector<int>();
    ifstream archivo;
    archivo.open("input1.txt", ios::in);
    int aux;
    while (!archivo.eof()) {
        archivo >> aux;
        numeros->push_back(aux);
    }
    vector<ga*>* sumados = new vector<ga*>();
    for (int i = 0; i < numeros->size() -1; i++)
    {
        for (int j = i + 1; j < numeros->size(); j++)
        {
            auto aux = new ga;
            aux->suma = long int (numeros->at(i))+numeros->at(j);
            aux->num1 = numeros->at(i);
            aux->num2 = numeros->at(j);
            sumados->push_back(aux);
        }
    }
    for (int i = 0; i < numeros->size(); i++)
    {
        for (int j = 0; j < sumados->size(); j++)
        {
            if(sumados->at(j)->num1 != numeros->at(i) && sumados->at(j)->num2 != numeros->at(i) && sumados->at(j)->suma + numeros->at(i) == 2020){
                cout<<sumados->at(j)->num1<<endl;
                cout<<sumados->at(j)->num2<<endl;
                cout << numeros->at(i) << endl;
                cout<<sumados->at(j)->num1 * sumados->at(j)->num2 * numeros->at(i)<<endl;
                return 0;
            }
        }
    }
    return 1;
}