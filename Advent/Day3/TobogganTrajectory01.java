import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class TobogganTrajectory01 {
	public static void main(String[] args) {
		try {
			File myObj = new File("Advent/Day3/input2.txt");
			Scanner myReader = new Scanner(myObj);
			int indice = 0, contador=0;
			while (myReader.hasNextLine()) {
				String data = myReader.nextLine();
				if(data.charAt(indice)=='#'){
					contador+=1;
				}
				indice+=3;
				if(indice>=data.length()){
					indice  = indice % data.length();
				}
			}
			System.out.println(contador);
			myReader.close();
		} catch (FileNotFoundException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}
}