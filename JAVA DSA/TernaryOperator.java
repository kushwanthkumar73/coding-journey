import java.util.Scanner;

public class TernaryOperator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = sc.nextInt();
        String result = (number % 2 == 0) ? "Even" : "Odd";
        System.out.println(number + " is an " + result + " number.");
        sc.close();
    }
}
