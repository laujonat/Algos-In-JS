type ProblemType =
  | "sorting"
  | "recursion"
  | "trees"
  | "graphs"
  | "dynamic programming";

type CategoryType = "data structures" | "problems";
type StructType =
  | "graphs"
  | "node"
  | "searching"
  | "sorting"
  | "struct"
  | "trees";
export type Template = {
  category: CategoryType,
  type: ProblemType | StructType,
  filepath: String,
  params: Array<String>,
};
