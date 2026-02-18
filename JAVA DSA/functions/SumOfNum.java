import java.util.Scanner;

class SumOfNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Age:");
        int a =sc.nextInt();
        int b = sc.nextInt();
        sum(a,b);
        
    }
    static void sum(int a,int b){
        System.out.println(a+b);
    }
    
}