package solutions;

import java.util.HashMap;

public class ArrayHashSolutions {

    /* Params: unsorted array nums, int target 
     * Return: 2 size int array of number pair that equals target 
     * 1
     * https://leetcode.com/problems/two-sum/description/*/
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
    /* Params: int array nums
     * Return: boolean value */
    /* Params: int array nums
     * Return: boolean value
     * 217
     * https://leetcode.com/problems/contains-duplicate/description/ */
    public static boolean containsDuplicate(int[] nums) {
        if (nums.length <= 1) return false; // duplicates require length of 2 or more
        HashMap<Integer, Integer> numMap = new HashMap<>();
        for (int x = 0; x < nums.length; x++) {
            if (!numMap.containsKey(nums[x])) { // If num doesn't exist yet, add
                numMap.put(nums[x], nums[x]);
            } else {
                return true; // If num does exist, we have a duplicate
            }
        }
        return false; // reaching here means no duplicates encountered
    }
}
