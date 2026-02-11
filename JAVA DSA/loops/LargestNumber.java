import java.util.Scanner;

class LargestNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int max =0;
        while(n>0){
            int lastDigit=n%10;
            if(lastDigit>max){
                max = lastDigit;
            }
            n=n/10;
        }
        System.out.println(max);
    }
}