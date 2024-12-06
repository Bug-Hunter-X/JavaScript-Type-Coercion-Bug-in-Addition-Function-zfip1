# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript function related to type coercion and null checks. The function `foo` is intended to add two numbers, but its handling of null and zero values is inconsistent. 

## Bug Description

The function correctly returns `null` if either input is `null`. However, it fails to handle the case where either input is a falsy value like `0`, `false`, or an empty string. This leads to unexpected results when using the function with such values.

## Solution

A more robust solution is provided that explicitly checks for nullish values using the nullish coalescing operator (`??`) and converts inputs to numbers before performing the addition. This ensures consistent and predictable behavior for various input types.