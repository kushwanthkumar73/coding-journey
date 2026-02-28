class Main {
    public static void main(String[] args) {
        int[] arr = {2,5,1,3,4,7};
        int[] ans = new int[arr.length];
        int n =arr.length/2;
        for(int i =0;i<n;i++){
            ans[2*i] = arr[i];
            ans[2*i+1] = arr[i+n];
        }
        for(int i=0;i<arr.length;i++){
            System.out.print(ans[i]);
        }
        
        
        
    }
    
}