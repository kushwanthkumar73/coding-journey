import java.util.Scanner;

class ReverseNaturalNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int num = 1;
        int n = sc.nextInt();
        while (n>0) {
            System.out.println(n+" ");
            n--;
        }
    }
}