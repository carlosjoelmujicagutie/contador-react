import React from 'react'
import {users} from './../db/users'
import { Usuario } from './Usuario'

export const ListaUsuarios = () => {
  return (
    <div className="Container">
      <div className="Title">Lista de Usuarios</div>
         <ul>
            {users.map((user) =>(
                <Usuario key={user.id} user={user}/>
            ))}
         </ul>
    </div>
  )
}
