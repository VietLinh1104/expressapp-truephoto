// permissions.config.js

const permissions = {
    admin: {
        client_email_submission: ['read', 'read_all', 'create', 'update', 'delete'],
        email: ['read', 'read_all', 'create', 'update', 'delete'],
        request_client: ['read', 'read_all', 'create', 'update', 'delete'],
        deliverables_document: ['create', 'read_all', 'read', 'update', 'delete'],
        documents: ['read_all', 'read', 'create', 'update', 'delete'],
        send_mail: ['send'],
    },
    employee: {
        client_email_submission: ['read', 'read_all', 'create', 'update', 'delete'],
        email: ['read', 'read_all', 'create', 'update', 'delete'],
        request_client: ['read', 'read_all', 'create', 'update', 'delete'],
        deliverables_document: ['create', 'read_all', 'read', 'update', 'delete'],
        documents: ['read_all', 'read', 'create', 'update', 'delete'],
        send_mail: ['send'],
    },
    public: {
        client_email_submission: ['create'],
        request_client: ['create', 'read'],
        deliverables_document: ['read', 'update', 'delete'],
        documents: ['create'],
    }
};
  
export default permissions;
  