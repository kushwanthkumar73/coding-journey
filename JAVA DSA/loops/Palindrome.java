import java.util.Scanner;

class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int num = sc.nextInt();
        int reverse =0;
        int original =num;
        for(;num>0;num=num/10){
            int digit=num%10;
            reverse= reverse*10 + digit;
        }
        if(original==reverse){
            System.out.println("Is Palindrome");
        } else{
            System.out.println("Not A Palindrome");
        }
    }
}