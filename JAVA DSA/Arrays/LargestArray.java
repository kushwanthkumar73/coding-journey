class LargestArray {
    public static void main(String[] args) {
        int[] arr = {1,5,9,123,156,85,65};
        int largest = Integer.MIN_VALUE;
        int result = largestArray(arr,largest);
        System.out.println(result);
    }
    static int largestArray(int[] arr,int largest){
        for(int i=0;i<arr.length;i++){
            int currt = arr[i];
            if(currt>largest){
                largest=currt;
            }
        }
        return largest;
    }
}
