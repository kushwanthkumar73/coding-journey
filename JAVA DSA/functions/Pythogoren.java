import java.util.Scanner;

class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        boolean result =checkPythogoren(a,b,c);
        if(result == true){
            System.out.println("Is Pythogoren");
        } else {
            System.out.println("Is Not Pythogoren");
        }
    }
    static boolean checkPythogoren(int a,int b,int c){
        if(a>=b && a>=c){
            return (b*b +c*c == a*a);
        }
        else if (b>=a && b>=c){
            return (a*a +c*c == b*b);
        }else {
            return (b*b +a*a == c*c);
        }
    }
}