class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {5,4,3,2,1};
        sort(arr);
        for(Integer i: arr){
            System.out.print(i+" ");
        }
    }
    static void sort(int[] arr){
        
        for(int i=0;i<arr.length;i++){
            int minInd = i;
            for(int j =i;j<arr.length;j++){
                if(arr[j] <arr[minInd]){
                    minInd=j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minInd];
            arr[minInd] = temp;
        }
        
    }
    
}