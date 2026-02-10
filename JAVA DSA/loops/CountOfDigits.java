import java.util.Scanner;

public class CountOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int count = 0;

        while (num != 0) {
            num /= 10; // Remove the last digit
            count++; // Increment the count
        }

        System.out.println("The number of digits is: " + count);
    }
}
