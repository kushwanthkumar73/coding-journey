import java.util.Scanner;

class MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Number: ");
        int n = sc.nextInt();
        for(int num =1;num<=10;num++){
            System.out.println(n*num);
        }
    }
}