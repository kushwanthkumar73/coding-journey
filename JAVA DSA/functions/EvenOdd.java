import java.util.Scanner;

class EvenOdd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number:");
        int n =sc.nextInt();
        evenOdd(n);
        
    }
    static void evenOdd(int n){
        if(n%2==0){
            System.out.println("The Given NUmber is Even");
        } else{
            System.out.println("The Given Number is Odd");
        }
    }
    
}