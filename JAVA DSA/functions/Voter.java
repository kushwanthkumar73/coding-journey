import java.util.Scanner;

class Voter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Age:");
        int age =sc.nextInt();
        checkVoter(age);
        
    }
    static void checkVoter(int age){
        if(age>=18){
            System.out.println("Voter is Eligible to Vote");
        } else{
            System.out.println("Voter is Not Eligible to Vote");
        }
    }
    
}