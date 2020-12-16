import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class TobogganTrajectory02 {
    public static class Indices {
        public int horizontal;
        public int saltohorizontal;
        public int vertical;
        public int saltovertical;
        public int contador;

        public Indices(int horizontal, int vertical) {
            this.saltohorizontal = horizontal;
            this.saltovertical = vertical;
            this.horizontal = 0;
            this.vertical = 0;
            this.contador = 0;
        }
    }

    public static void main(String[] args) {
        try {
            File myObj = new File("Advent/Day3/input2.txt");
            Scanner myReader = new Scanner(myObj);
            Indices[] indices = new Indices[5];
            indices[0] = new Indices(1, 1);
            indices[1] = new Indices(3, 1);
            indices[2] = new Indices(5, 1);
            indices[3] = new Indices(7, 1);
            indices[4] = new Indices(1, 2);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                for (Indices i : indices) {
                    if (i.vertical == 0) {
                        if (data.charAt(i.horizontal) == '#') {
                            i.contador += 1;
                        }
                        i.horizontal += i.saltohorizontal;
                        if (i.horizontal >= data.length()) {
                            i.horizontal = i.horizontal % data.length();
                        }
                    }
                    i.vertical += 1;
                    if (i.vertical >= i.saltovertical) {
                        i.vertical = i.vertical % i.saltovertical;
                    }
                }
            }
            long rpt = 1;
            for (Indices i : indices) {
                System.out.println(i.contador);
                rpt = rpt * i.contador;
            }
            System.out.println(rpt);
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
//1115775000 -> F
//3316272960 -> A