import java.util.Scanner;

class CountOf3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        int count=0;
        for(int i=1;i<=num;i++) {
            if(i%3==0){
                count++;
            }
        }
        System.out.println(count);
        
    }
}