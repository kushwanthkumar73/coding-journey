import java.util.Scanner;

class ProductOfNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int num = sc.nextInt();
        int product =1;
        for(;num>0;num=num/10){
            int digit= num%10;
            product= product*digit;
        }
        System.out.println(product);
    }
}