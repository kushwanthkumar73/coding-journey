import java.util.Scanner;

class Count {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Number:");
        int n = sc.nextInt();
        int count = 0;
        int even =0;
        int odd=0;
        for(int i=1;i<=n;i++){
            count +=i;
            if (i%2==0){
                even +=i;
            } else{
                odd+=i;
            }
        }
        System.out.println(count);
        System.out.println(even);
        System.out.println(odd);
    }
}