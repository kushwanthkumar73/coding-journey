import java.util.Scanner;

class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        
        boolean result =isPalindrome(n);
        if(result == true){
            System.out.println("Is Palindrome");
        } else {
            System.out.println("Is Not Palindrome");
        }
    }
    static boolean isPalindrome(int n){
        int reverse = 0;
        int num=n;
        for (;n>0;n=n/10){
            int digit = n%10;
            reverse = reverse *10+digit;
        }
        return num == reverse;
    }
}