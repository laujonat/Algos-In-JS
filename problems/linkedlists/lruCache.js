/*
Design And Implement LRU Cache

Problem Statement:

The LRU caching scheme removes the least recently used frame, when the cache is full and a new page is referenced which is not there in the cache.
You are given one integer named capacity, denoting the maximum size possible of the LRU cache. Also you are given three integer arrays named query_type, key and value, each having size n.
query_type[i], key[i] and value[i] together denotes one query. So there are total n queries.

query_type contains 0 or 1. query_type[i] = 0 means ith query is GET query and query_type[i] = 1 means ith query is SET query. key and value arrays contain only positive integers.

You have to return an array containing answers for GET queries.

GET query:
  For GET query only key[i] matters, do not care what is stored in value[i].
  For each GET query append one integer in the array to be returned. Append the value of the key[i], if the key[i] exists in the cache, otherwise append -1.
SET query:
  If key[i] is already present in the cache then update its value to value[i], else add key[i] with value value[i] in the cache.

Input/Output Format For The Function:
Input Format:
  There are four arguments in the input. First is integer named capacity. Second is integer array named query_type. Third is integer array named key. Fourth is integer array named value.
Output Format:
  Return an array res containing answers for GET queries.

For input:
  n = 7,
  capacity = 2,

index   query_type     key       value
0           1           5         11
1           1           10        22
2           0           5         1
3           1           15        33
4           0           10        1
5           1           5         55
6           0           5         1

Output will be:
  11
  -1
  55

Constraints:
  1 <= n <= 10^5
  1 <= capacity <= 10^5
  query_type[i] belongs to {0, 1}
  1 <= key[i] <= 10^5
  1 <= value[i] <= 10^5
*/
function LRUCache(capacity, query_type, key, value) {}

module.exports = LRUCache;
