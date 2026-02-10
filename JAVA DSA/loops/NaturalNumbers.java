import java.util.Scanner;

class NaturalNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int num = 1;
        int n = sc.nextInt();
        while (num<=n) {
            System.out.println(num);
            num++;
        }
    }
}