import java.util.Scanner;

class LastDigit7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        for(int i=1;i<=n;i++){
            if(i%10 == 7){
                System.out.println(i);
            }
        }
    }
}

