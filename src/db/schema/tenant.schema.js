const createTenantsTable = `
    CREATE table  tenants (
        uid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        
        tenant_id text NOT NULL,
        name text NOT NULL,
        
        status text NOT NULL DEFAULT 'active',
        
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        updated_by TEXT,
        
        constraint tenant_tenant_id_unique unique (tenant_id),
        constraint tenant_name_unique unique(name),
        constraint tenant_status_check check (status in ('active', 'inactive'))
    );
`;

const createActiveTenantsView = `
    CREATE OR REPLACE VIEW v_active_tenants AS
    SELECT *
    FROM tenants
    WHERE status = 'active';
`;

const createTenantFunction = `
    CREATE OR REPLACE FUNCTION public.fn_create_tenant(
        p_id uuid,
        p_name text,
        p_status text DEFAULT NULL
    )
    RETURNS uuid
    LANGUAGE plpgsql
    AS $function$
    DECLARE
      v_id uuid;
    BEGIN
      INSERT INTO tenants (id, name, status)
      VALUES (p_id, p_name, COALESCE(p_status, 'active'))
      RETURNING id INTO v_id;

      RETURN v_id;
    END;
    $function$;
`;

module.exports = {
  createTenantsTable,
  createActiveTenantsView,
  createTenantFunction,
};
