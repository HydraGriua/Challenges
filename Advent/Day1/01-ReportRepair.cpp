//#include <bits/stdc++.h>
#include <vector>
#include <iostream>
#include <fstream>
using namespace std;
int main() {
    vector<int>* numeros = new vector<int>();
    ifstream archivo;
    archivo.open("input1.txt", ios::in);
    int aux;
    while (!archivo.eof()) {
        archivo >> aux;
        numeros->push_back(aux);
    }
    for (int i = 0; i < numeros->size() - 1; i++)
    {
        for (int j = i + 1; j < numeros->size(); j++)
        {
            if (numeros->at(i) + numeros->at(j) == 2020)
            {
                cout << (numeros->at(i)) << endl;
                cout << (numeros->at(j)) << endl;
                cout << (numeros->at(i) * numeros->at(j)) << endl;
                return 0;
            }
        }
    }
    return 1;
}