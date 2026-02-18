import java.util.Scanner;

class ProductOfNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Numbers:");
        int a =sc.nextInt();
        int b = sc.nextInt();
        int result = product(a,b);
        System.out.println(result);
        
    }
    static int product(int a,int b){
        return a*b;
    }
    
}