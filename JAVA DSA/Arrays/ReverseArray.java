class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        reverseArray(arr);
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");;
        }
    }
    static void reverseArray(int[] arr){
        int a =0,b=arr.length-1;
        while(a<b){
            int temp = arr[a];
            arr[a]=arr[b];
            arr[b]=temp;
            a++;
            b--;
        }
        
    }
}
