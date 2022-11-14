# Inertia.js DataGrid

[![Latest Version on NPM](https://img.shields.io/npm/v/inertia-datagrid.svg?style=flat-square)](https://npmjs.com/package/inertia-datagrid)
[![npm](https://img.shields.io/npm/dt/inertia-datagrid.svg?style=flat-square)](https://www.npmjs.com/package/inertia-datagrid)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

---

<p align="center"> you can use pacakge with vue 3 and custom slots
    <br> 
</p>

## 📝 Code

```js
const props = defineProps({
    users: Array,
});
const columns = [
    {
        name: "id",
        label: "NO",
        field: "id",
        sortable: true,
    },
    {
        name: "name",
        label: "Name",
        field: "name",
        sortable: true,
    },
    {
        name: "email",
        label: "E-MAIL",
        field: "email",
        sortable: true,
    },
    {
        name: "verification",
        label: "Email Verified At",
        field: "email_verified_at",
        sortable: false,
    },
    {
        name: "created_at",
        label: "Created At",
        field: "created_at",
        sortable: true,
    },
    {
        name: "actions",
        label: "Actions",
        type: "action",
    },
];
const actions = [
    { title: "View", route: "admin.users.show", color: "blue" },
    { title: "Edit", route: "admin.users.edit", color: "orange" },
    { title: "Delete", route: "admin.users.destroy", color: "red" },
];
```

# impot DataGrid Component from inertia-datagrid

```js
import DataGrid from "inertia-datagrid";
<DataGrid :columns="columns" :data="users" :actions="actions" baseRoute="admin.users.index">
        
</DataGrid>
```

# using custom column with slot

```js
<datagrid :columns="columns" :data="users" :actions="actions" baseRoute="admin.users.index">
            <template v-slot:row-cell-email_verified_at="{ item }">
                <div class="py-2">
                    <span v-if="!item" class="text-xs bg-red-100 text-red-500 rounded-lg p-1">Verified</span>
                    <span v-else class="text-xs bg-green-100 text-green-500 rounded-lg p-1">Not Verified</span>
                </div>
            </template>

</datagrid>
```