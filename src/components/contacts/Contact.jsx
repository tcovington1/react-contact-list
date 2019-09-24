import React from 'react';
import { Table, Button } from 'semantic-ui-react';


                          //this means return
export const Contact = ({ id, firstName, phone, remove}) => (
  <Table.Row  id={id}>
  <Table.Cell>{firstName}</Table.Cell>
  <Table.Cell>{phone}</Table.Cell>
  <Table.Cell>
                                    {/* only fire of if clicked, must be anonymous function */}
    <Button color='red' onClick={() => remove(id)}>
      Delete
    </Button>
    <Button color='blue'>
      Edit
    </Button>
  </Table.Cell>
</Table.Row>
)

export default Contact;