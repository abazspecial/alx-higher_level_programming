#include "hash_tables.h"

/**
 * The hash_table_create - Creates a hash table.
 * @size: Is the size of the array.
 *
 * Return: If an error occurs - NULL. Tk
 *         or Otherwise - a pointer to the new hash table.
 */
hash_table_t *hash_table_create(unsigned long int size)
{
	hash_table_t *ht;
	unsigned long int i;

	ht = malloc(sizeof(hash_table_t));
	if (ht == NULL)
		return (NULL);

	ht->size = size;
	ht->array = malloc(sizeof(hash_node_t *) * size);
	if (ht->array == NULL)
		return (NULL);
	for (i = 0; i < size; i++)
		ht->array[i] = NULL;

	return (ht);
}
