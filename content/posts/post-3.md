---
title: "how to make dependent dropdown lists in excel"
date: 2026-10-20T09:39:00Z
image: /images/post/post-3.webp
categories: ["Computer"]
featured: true
draft: false
---

# How to Make Dependent Dropdown Lists in Excel

A dependent dropdown list in Excel changes its options based on the
selection made in another dropdown. For example, choosing **Fruit** in
the first dropdown can make the second dropdown show **Apple, Banana,
Orange**, while choosing **Vegetables** shows **Carrot, Potato, Onion**.

This guide uses **Named Ranges and Data Validation**, a method that
works in many desktop versions of Excel.

## Example

  Category     Items
  ------------ -----------------------
  Fruit        Apple, Banana, Orange
  Vegetables   Carrot, Potato, Onion
  Drinks       Water, Tea, Coffee

The first dropdown will contain `Fruit`, `Vegetables`, and `Drinks`. The
second dropdown will show the matching items.

## Step 1: Create the source lists

1.  Open Excel and create a worksheet named `Lists`.

2.  Enter the categories in cells `A1:C1`:

      A       B            C
      ------- ------------ --------
      Fruit   Vegetables   Drinks

3.  Enter each category's options below its heading:

      A        B            C
      -------- ------------ --------
      Fruit    Vegetables   Drinks
      Apple    Carrot       Water
      Banana   Potato       Tea
      Orange   Onion        Coffee

Keep each list in its own column, with the category name as the heading.

## Step 2: Create named ranges

Create a named range for each list.

1.  Select `A2:A4`, containing Apple, Banana, and Orange.
2.  Click the **Name Box** to the left of the formula bar.
3.  Type `Fruit` and press **Enter**.
4.  Select `B2:B4`, type `Vegetables` in the Name Box, and press
    **Enter**.
5.  Select `C2:C4`, type `Drinks` in the Name Box, and press **Enter**.

The range names must match the category names exactly. Avoid spaces in
category names when using this method. For example, use `Cold_Drinks`
rather than `Cold Drinks`.

## Step 3: Create the first dropdown

1.  Open the worksheet where you want users to make selections, such as
    `Sheet1`.

2.  Select cell `A2`.

3.  Go to **Data → Data Validation**.

4.  Under **Allow**, choose **List**.

5.  In **Source**, enter:

    ``` excel
    =Lists!$A$1:$C$1
    ```

    If Excel does not accept a direct reference to another worksheet in
    Data Validation, create a named range for the category headings and
    use that name as the source.

6.  Make sure **In-cell dropdown** is selected, then click **OK**.

### Optional: Name the category headings

To avoid cross-sheet reference issues:

1.  On the `Lists` worksheet, select `A1:C1`.

2.  Use the Name Box to name the range `Categories`.

3.  Return to the first dropdown's Data Validation settings and set
    **Source** to:

    ``` excel
    =Categories
    ```

## Step 4: Create the dependent dropdown

1.  Select cell `B2`, where the second dropdown should appear.

2.  Go to **Data → Data Validation**.

3.  Under **Allow**, choose **List**.

4.  In **Source**, enter:

    ``` excel
    =INDIRECT(A2)
    ```

5.  Click **OK**.

Excel uses the selection in `A2` to find the named range with the same
name. If `A2` contains `Fruit`, the dropdown in `B2` uses the `Fruit`
named range.

## Step 5: Test the dropdowns

1.  Click the dropdown arrow in `A2`.
2.  Choose `Fruit`.
3.  Click the dropdown arrow in `B2`. You should see Apple, Banana, and
    Orange.
4.  Change `A2` to `Vegetables`. The options offered by `B2` should now
    be Carrot, Potato, and Onion.

**Important:** If you change the first dropdown after selecting an item
in the second dropdown, Excel may leave the old second selection in
place. Choose a new item from the second dropdown to match the new
category.

## Common problems and fixes

  -----------------------------------------------------------------------
  Problem                             What to check
  ----------------------------------- -----------------------------------
  The second dropdown is empty or     Confirm the category text exactly
  shows an error                      matches its named range.

  A category contains spaces          Use underscores in the category and
                                      named range, or use a different
                                      formula approach.

  Excel rejects the first dropdown's  Create the `Categories` named range
  source                              and use `=Categories`.

  New items do not appear             Expand the named range or convert
                                      the source lists into Excel Tables
                                      and update the setup.

  The old item remains after changing Re-select a valid item in the
  the category                        dependent dropdown. Data Validation
                                      does not automatically clear it.
  -----------------------------------------------------------------------

## Quick recap

-   Put each category's choices in a separate column.
-   Create a named range for each category's options.
-   Create the first dropdown using the category names.
-   Create the second dropdown with `=INDIRECT(A2)`.
-   Ensure each category matches its named range.

## Note for newer Excel versions

For larger or frequently updated workbooks, you can also build dependent
dropdowns using Excel Tables, dynamic array formulas such as `FILTER`,
and named formulas. The exact setup depends on your Excel version and
workbook layout.
