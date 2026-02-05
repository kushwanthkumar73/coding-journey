import java.util.Scanner;

public class Area_of_circle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the radius of the circle: ");
        int radius = sc.nextInt();
        double area = 3.14 * radius * radius;
        System.out.println("The area of the Circle with Radius " + radius + " is: " + area);
        sc.close();
    }
}
