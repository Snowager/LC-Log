package solutions;

import java.util.HashMap;

public class ArrayHashSolutions {

    /* Params: unsorted array nums, int target 
     * Return: 2 size int array of number pair that equals target */
    public static int[] twoSum(int[] nums, int target) {
		final int[] twoNum = new int[2]; // fixed array with final values to optimize
		HashMap<Integer, Integer> numMap = new HashMap<Integer, Integer>(); // Hashmap for grouping
		for (int x = 0; x < nums.length; x++) {
			if (!numMap.containsKey(target - nums[x])) {
				numMap.put(nums[x], x); 
			} else {
				twoNum[1] = x;
				twoNum[0] = numMap.get(target - nums[x]);
			}
		}
		return twoNum;
	}
}
