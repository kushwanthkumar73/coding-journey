import java.util.Scanner;

public class Area_of_square {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the side length of the square: ");
        int side = sc.nextInt();

        int area = side * side;

        System.out.println(
            "The area of the square with side length " + side + " is: " + area
        );

        sc.close();
    }
}

