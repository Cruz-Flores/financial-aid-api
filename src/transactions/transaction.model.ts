export interface Transaction {
  responseHeader: ResponseHeader;
  response: Response;
}

export interface Response {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
}

export interface Doc {
  sector_code?: string[];
  budget_value?: number[];
  budget_status?: string[];
  dataset_version: string;
  iati_identifier: string;
  title_narrative: string[];
  default_currency: string;
  sector_narrative?: string[];
  document_link_url?: string[];
  reporting_org_ref: string;
  sector_vocabulary?: string[];
  transaction_value: number[];
  activity_date_type: string[];
  contact_info_email?: string[];
  policy_marker_code?: string[];
  reporting_org_type: string;
  activity_scope_code?: string;
  activity_status_code: string;
  crs_add_channel_code?: string;
  document_link_format?: string[];
  other_identifier_ref?: string[];
  default_aid_type_code?: string[];
  description_narrative: string[];
  other_identifier_type?: string[];
  participating_org_ref?: string[];
  activity_date_iso_date: string[];
  default_flow_type_code?: string;
  participating_org_role: string[];
  recipient_country_code: string[];
  budget_value_value_date?: string[];
  reporting_org_narrative: string[];
  default_tied_status_code?: string;
  default_finance_type_code?: string;
  budget_period_end_iso_date?: string[];
  policy_marker_significance?: string[];
  document_link_category_code?: string[];
  document_link_language_code?: string[];
  participating_org_narrative: string[];
  recipient_country_narrative?: string[];
  budget_period_start_iso_date?: string[];
  transaction_value_value_date: string[];
  document_link_title_narrative?: string[];
  transaction_transaction_type_code: string[];
  transaction_transaction_date_iso_date: string[];
  xml_lang?: string;
  hierarchy?: number;
  budget_type?: string[];
  description_type?: string[];
  related_activity_ref?: string[];
  budget_value_currency?: string[];
  last_updated_datetime?: string;
  related_activity_type?: string[];
  participating_org_type?: string[];
  dataset_generated_datetime?: string;
  transaction_value_currency?: string[];
  transaction_provider_org_ref?: string[];
  transaction_receiver_org_ref?: string[];
  transaction_provider_org_type?: string[];
  transaction_provider_org_narrative?: string[];
  transaction_receiver_org_narrative?: string[];
  transaction_provider_org_provider_activity_id?: string[];
  transaction_receiver_org_receiver_activity_id?: string[];
  humanitarian?: boolean;
  transaction_ref?: string[];
  contact_info_type?: string[];
  location_point_pos?: string[];
  budget_not_provided?: string;
  conditions_attached?: boolean;
  contact_info_website?: string[];
  location_point_srsName?: string[];
  activity_date_narrative?: string[];
  collaboration_type_code?: string;
  humanitarian_scope_code?: string[];
  humanitarian_scope_type?: string[];
  location_exactness_code?: string[];
  location_name_narrative?: string[];
  transaction_sector_code?: string[];
  capital_spend_percentage?: number;
  transaction_humanitarian?: boolean[];
  conditions_condition_type?: string[];
  humanitarian_scope_narrative?: string[];
  location_location_reach_code?: string[];
  recipient_country_percentage?: number[];
  humanitarian_scope_vocabulary?: string[];
  participating_org_activity_id?: string[];
  transaction_sector_vocabulary?: string[];
  conditions_condition_narrative?: string[];
  other_identifier_owner_org_ref?: string[];
  contact_info_department_narrative?: string[];
  transaction_description_narrative?: string[];
  participating_org_crs_channel_code?: string[];
  contact_info_organisation_narrative?: string[];
  other_identifier_owner_org_narrative?: string[];
  transaction_disbursement_channel_code?: string[];
  contact_info_mailing_address_narrative?: string[];
}

export interface ResponseHeader {
  zkConnected: boolean;
  status: number;
  QTime: number;
  params: Params;
}

export interface Params {
  q: string;
  sort: string;
  rows: string;
}
