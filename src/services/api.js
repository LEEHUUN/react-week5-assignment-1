export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  // TODO: getch Get /categories
  // REST - CRUD => Read - collection / member, element
  return data;
}

export function hello() {

}
