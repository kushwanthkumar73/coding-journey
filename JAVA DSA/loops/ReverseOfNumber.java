import java.util.Scanner;

class ReverseOfNumber {
    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int num = sc.nextInt();
        int reverseNumber = 0;
        while (num >0){
            int digit = num %10;
            reverseNumber = reverseNumber*10 + digit;
            num=num/10;
        }
        System.out.println(" Reverse of a Number : "+ reverseNumber);
    }
}