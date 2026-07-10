import './supabaseRequests.css';
import supabase from '../supabaseConfig/supabaseConfig';

// ─── READ ────────────────────────────────────────────────
export async function getAllClients() {
  const { data, error } = await supabase.from('clients').select('*')

  if (error) throw error

  return data

}

// export async function getClientById(id) {
//   const { data, error } = await supabase
//     .from('clients')
//     .select('*')
//     .eq('id', id)
//     .single();
//   if (error) throw error;
//   return data;
// }

// ─── INSERT / UPSERT ─────────────────────────────────────
// create a client
export async function insertClient(client, errorMessage, closeModal, resetAllFields) {
  const { id, ...clientData } = client

  const payload = id ? { id, ...clientData } : clientData

  const { data, error } = await supabase
    .from('clients')
    .upsert(payload, { onConflict: 'id' })
    .select()
    .single()

  if (error) {
    errorMessage('Unauthorized access')
    setTimeout(() => errorMessage(null), 3000)
    
    console.error('Error inserting client:', error)
    throw error
    
  } 
  
  console.log('Client successfully created:', data)
  alert("Client added successfully!")
  closeModal()
  resetAllFields()

  return data

}

//create all client
export async function insertAllClients(clients, errorMessage) {
  const { data, error } = await supabase
    .from('clients')
    .upsert(clients, { onConflict: 'id' })
    .select()

  if (error) {
    if (error.code === '42501' || error.message?.includes('row-level security')) {
      errorMessage('Unauthorized access')
      setTimeout(() => errorMessage(null), 3000)

    } else {
      errorMessage('Error inserting clients.')

    }

    throw error

  }

  errorMessage(null)
  console.log(`${clients.length} clients successfully added/updated!`)
  alert("Clients added successfully!")

  return data

}

// ─── UPDATE ──────────────────────────────────────────────
// export async function updateClient(id, fields) {
//   const { data, error } = await supabase
//     .from('clients')
//     .update(fields)
//     .eq('id', id)
//     .select()
//     .single();
//   if (error) throw error;
//   return data;
// }

// ─── DELETE ──────────────────────────────────────────────
// export async function deleteClient(id) {
//   const { error } = await supabase
//     .from('clients')
//     .delete()
//     .eq('id', id);
//   if (error) throw error;
// }

// export async function deleteAllClients() {
//   const { error } = await supabase
//     .from('clients')
//     .delete()
//     .neq('id', '00000000-0000-0000-0000-000000000000'); // deleta tudo exceto um UUID impossível
//   if (error) throw error;
// }
