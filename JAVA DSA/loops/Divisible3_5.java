import java.util.Scanner;

class Divisible3_5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        for (int i =1;i<=n;i++){
            if(i%3==0 && i%5==0){
                System.out.println(i);
            }
        }
    }
}