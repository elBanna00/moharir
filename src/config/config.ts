export interface LanguangeOption {
  language: string;
  version: string;
  aliases: string[];
  runtime?: string;
}
export const LanguangeOpts: LanguangeOption[] = [
  {
    language: "typescript",
    version: "1.32.3",
    aliases: ["deno", "deno-ts"],
    runtime: "deno",
  },
  {
    language: "javascript",
    version: "1.32.3",
    aliases: ["deno-js"],
    runtime: "deno",
  },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  {
    language: "go",
    version: "1.16.2",
    aliases: ["go", "golang"],
  },
  {
    language: "lua",
    version: "5.4.4",
    aliases: [],
  },
  {
    language: "rust",
    version: "1.68.2",
    aliases: ["rs"],
  },
  {
    language: "zig",
    version: "0.10.1",
    aliases: [],
  },
];

export const exampleSnippets = {
  typescript: `
  function sum(a, b) {
    const result = a + b;
    console.log("Sum is: " + result);
    return result;
  }
  sum(1, 2);
  `.trim(),

  javascript: `
  function sum(a, b) {
    const result = a + b;
    console.log("Sum is: " + result);
    return result;
  }
  sum(1, 2);
  `.trim(),

  "c++": `
  #include <iostream>
  using namespace std;
  
  int sum(int a, int b) {
    int result = a + b;
    cout << "Sum is: " << result << endl;
    return result;
  }
  
  int main() {
    sum(1, 2);
    return 0;
  }
  `.trim(),

  go: `
  package main
  
  import "fmt"
  
  func sum(a int, b int) int {
    result := a + b
    fmt.Println("Sum is:", result)
    return result
  }
  
  func main() {
    sum(1, 2)
  }
  `.trim(),

  lua: `
  function sum(a, b)
    local result = a + b
    print("Sum is: " .. result)
    return result
  end
  
  sum(1, 2)
  `.trim(),

  rust: `
  fn sum(a: i32, b: i32) -> i32 {
    let result = a + b;
    println!("Sum is: {}", result);
    return result;
  }
  
  fn main() {
    sum(1, 2);
  }
  `.trim(),

  zig: `
  const std = @import("std");
  
  fn sum(a: i32, b: i32) i32 {
    const result = a + b;
    std.debug.print("Sum is: {}\n", .{result});
    return result;
  }
  
  pub fn main() void {
    sum(1, 2);
  }
  `.trim(),
};
