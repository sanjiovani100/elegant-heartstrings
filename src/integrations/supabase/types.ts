export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      application_reviews: {
        Row: {
          application_id: string | null
          comment: string
          created_at: string | null
          id: string
          reviewer_id: string | null
        }
        Insert: {
          application_id?: string | null
          comment: string
          created_at?: string | null
          id?: string
          reviewer_id?: string | null
        }
        Update: {
          application_id?: string | null
          comment?: string
          created_at?: string | null
          id?: string
          reviewer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_reviews_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "sponsorship_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action_type: Database["public"]["Enums"]["audit_action"]
          changes: Json | null
          created_at: string | null
          id: string
          ip_address: unknown | null
          record_id: string
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_type: Database["public"]["Enums"]["audit_action"]
          changes?: Json | null
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          record_id: string
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: Database["public"]["Enums"]["audit_action"]
          changes?: Json | null
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          record_id?: string
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      content_translations: {
        Row: {
          content_type: string | null
          created_at: string | null
          en: string | null
          es: string | null
          id: string
          key: string
          last_reviewed_at: string | null
          reviewed_by: string | null
          section_id: string | null
          status: string
          updated_at: string | null
          validation_errors: Json | null
          version: number
        }
        Insert: {
          content_type?: string | null
          created_at?: string | null
          en?: string | null
          es?: string | null
          id?: string
          key: string
          last_reviewed_at?: string | null
          reviewed_by?: string | null
          section_id?: string | null
          status?: string
          updated_at?: string | null
          validation_errors?: Json | null
          version?: number
        }
        Update: {
          content_type?: string | null
          created_at?: string | null
          en?: string | null
          es?: string | null
          id?: string
          key?: string
          last_reviewed_at?: string | null
          reviewed_by?: string | null
          section_id?: string | null
          status?: string
          updated_at?: string | null
          validation_errors?: Json | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "content_translations_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "page_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      event_sponsorships: {
        Row: {
          agreement_details: Json | null
          contribution_amount: number | null
          created_at: string | null
          end_date: string | null
          event_id: string | null
          id: string
          level_id: string | null
          sponsor_id: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["sponsorship_status"] | null
          updated_at: string | null
        }
        Insert: {
          agreement_details?: Json | null
          contribution_amount?: number | null
          created_at?: string | null
          end_date?: string | null
          event_id?: string | null
          id?: string
          level_id?: string | null
          sponsor_id?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["sponsorship_status"] | null
          updated_at?: string | null
        }
        Update: {
          agreement_details?: Json | null
          contribution_amount?: number | null
          created_at?: string | null
          end_date?: string | null
          event_id?: string | null
          id?: string
          level_id?: string | null
          sponsor_id?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["sponsorship_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_sponsorships_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sponsorships_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sponsorships_level_id_fkey"
            columns: ["level_id"]
            isOneToOne: false
            referencedRelation: "sponsorship_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sponsorships_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          branding_guidelines: Json | null
          capacity: number | null
          category: Database["public"]["Enums"]["event_category"] | null
          cover_image: string | null
          created_at: string | null
          created_by: string
          date: string
          deleted_at: string | null
          description: string | null
          dress_code: string | null
          featured_highlights: Json | null
          id: string
          is_deleted: boolean | null
          location: string
          metadata: Json | null
          prerequisites: Json | null
          registration_status: string | null
          rich_description: string | null
          schedule_timeline: Json | null
          setup_completion_status: Json | null
          status: Database["public"]["Enums"]["event_status"] | null
          title: string
          updated_at: string | null
          venue_details: Json | null
        }
        Insert: {
          branding_guidelines?: Json | null
          capacity?: number | null
          category?: Database["public"]["Enums"]["event_category"] | null
          cover_image?: string | null
          created_at?: string | null
          created_by: string
          date: string
          deleted_at?: string | null
          description?: string | null
          dress_code?: string | null
          featured_highlights?: Json | null
          id?: string
          is_deleted?: boolean | null
          location: string
          metadata?: Json | null
          prerequisites?: Json | null
          registration_status?: string | null
          rich_description?: string | null
          schedule_timeline?: Json | null
          setup_completion_status?: Json | null
          status?: Database["public"]["Enums"]["event_status"] | null
          title: string
          updated_at?: string | null
          venue_details?: Json | null
        }
        Update: {
          branding_guidelines?: Json | null
          capacity?: number | null
          category?: Database["public"]["Enums"]["event_category"] | null
          cover_image?: string | null
          created_at?: string | null
          created_by?: string
          date?: string
          deleted_at?: string | null
          description?: string | null
          dress_code?: string | null
          featured_highlights?: Json | null
          id?: string
          is_deleted?: boolean | null
          location?: string
          metadata?: Json | null
          prerequisites?: Json | null
          registration_status?: string | null
          rich_description?: string | null
          schedule_timeline?: Json | null
          setup_completion_status?: Json | null
          status?: Database["public"]["Enums"]["event_status"] | null
          title?: string
          updated_at?: string | null
          venue_details?: Json | null
        }
        Relationships: []
      }
      media_collections: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          event_id: string | null
          id: string
          status: Database["public"]["Enums"]["media_status"] | null
          title: string
          type: Database["public"]["Enums"]["media_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          event_id?: string | null
          id?: string
          status?: Database["public"]["Enums"]["media_status"] | null
          title: string
          type: Database["public"]["Enums"]["media_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          event_id?: string | null
          id?: string
          status?: Database["public"]["Enums"]["media_status"] | null
          title?: string
          type?: Database["public"]["Enums"]["media_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_collections_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_collections_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_collections_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      media_items: {
        Row: {
          alt_text: string | null
          caption: string | null
          collection_id: string | null
          created_at: string | null
          file_type: string
          id: string
          metadata: Json | null
          order_index: number | null
          storage_path: string
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          collection_id?: string | null
          created_at?: string | null
          file_type: string
          id?: string
          metadata?: Json | null
          order_index?: number | null
          storage_path: string
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          collection_id?: string | null
          created_at?: string | null
          file_type?: string
          id?: string
          metadata?: Json | null
          order_index?: number | null
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_items_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "media_collections"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          metadata: Json | null
          recipient_id: string | null
          sender_id: string | null
          status: Database["public"]["Enums"]["message_status"] | null
          subject: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          recipient_id?: string | null
          sender_id?: string | null
          status?: Database["public"]["Enums"]["message_status"] | null
          subject?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          recipient_id?: string | null
          sender_id?: string | null
          status?: Database["public"]["Enums"]["message_status"] | null
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      model_applications: {
        Row: {
          created_at: string | null
          email: string
          experience: string
          feedback: string | null
          full_name: string
          id: string
          phone: string
          portfolio_link: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          experience: string
          feedback?: string | null
          full_name: string
          id?: string
          phone: string
          portfolio_link?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          experience?: string
          feedback?: string | null
          full_name?: string
          id?: string
          phone?: string
          portfolio_link?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          category: Database["public"]["Enums"]["notification_category"]
          created_at: string | null
          email_enabled: boolean | null
          push_enabled: boolean | null
          sms_enabled: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["notification_category"]
          created_at?: string | null
          email_enabled?: boolean | null
          push_enabled?: boolean | null
          sms_enabled?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["notification_category"]
          created_at?: string | null
          email_enabled?: boolean | null
          push_enabled?: boolean | null
          sms_enabled?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          content: string
          created_at: string | null
          id: string
          read_at: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string | null
        }
        Insert: {
          action_url?: string | null
          content: string
          created_at?: string | null
          id?: string
          read_at?: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id?: string | null
        }
        Update: {
          action_url?: string | null
          content?: string
          created_at?: string | null
          id?: string
          read_at?: string | null
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      page_sections: {
        Row: {
          created_at: string | null
          id: string
          order: number
          page_id: string | null
          section_key: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          order: number
          page_id?: string | null
          section_key: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          order?: number
          page_id?: string | null
          section_key?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "page_sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          created_at: string | null
          id: string
          is_published: boolean | null
          metadata: Json | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          metadata?: Json | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          metadata?: Json | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          full_name: string | null
          id: string
          phone_number: string | null
          social_links: Json | null
          status: Database["public"]["Enums"]["profile_status"] | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          phone_number?: string | null
          social_links?: Json | null
          status?: Database["public"]["Enums"]["profile_status"] | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          social_links?: Json | null
          status?: Database["public"]["Enums"]["profile_status"] | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      promotional_codes: {
        Row: {
          applicable_ticket_types: string[] | null
          code: string
          created_at: string | null
          created_by: string | null
          discount_type: string
          discount_value: number
          event_id: string | null
          id: string
          is_active: boolean | null
          metadata: Json | null
          times_used: number | null
          updated_at: string | null
          usage_limit: number | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          applicable_ticket_types?: string[] | null
          code: string
          created_at?: string | null
          created_by?: string | null
          discount_type: string
          discount_value: number
          event_id?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          times_used?: number | null
          updated_at?: string | null
          usage_limit?: number | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          applicable_ticket_types?: string[] | null
          code?: string
          created_at?: string | null
          created_by?: string | null
          discount_type?: string
          discount_value?: number
          event_id?: string | null
          id?: string
          is_active?: boolean | null
          metadata?: Json | null
          times_used?: number | null
          updated_at?: string | null
          usage_limit?: number | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promotional_codes_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promotional_codes_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsor_profiles: {
        Row: {
          company_name: string
          contact_info: Json | null
          created_at: string | null
          id: string
          industry: string | null
          logo_url: string | null
          status: Database["public"]["Enums"]["sponsor_status"] | null
          updated_at: string | null
          user_id: string | null
          website: string | null
        }
        Insert: {
          company_name: string
          contact_info?: Json | null
          created_at?: string | null
          id?: string
          industry?: string | null
          logo_url?: string | null
          status?: Database["public"]["Enums"]["sponsor_status"] | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Update: {
          company_name?: string
          contact_info?: Json | null
          created_at?: string | null
          id?: string
          industry?: string | null
          logo_url?: string | null
          status?: Database["public"]["Enums"]["sponsor_status"] | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsor_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsorship_analytics: {
        Row: {
          id: string
          measured_at: string | null
          metric_type: string
          metric_value: Json
          sponsor_id: string | null
        }
        Insert: {
          id?: string
          measured_at?: string | null
          metric_type: string
          metric_value: Json
          sponsor_id?: string | null
        }
        Update: {
          id?: string
          measured_at?: string | null
          metric_type?: string
          metric_value?: Json
          sponsor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsorship_analytics_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsorship_applications: {
        Row: {
          company_background: string | null
          company_tagline: string | null
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          contribution_details: string | null
          contribution_range: Json | null
          contribution_type: string | null
          created_at: string | null
          custom_branding_requests: string | null
          custom_requests: string | null
          event_id: string | null
          event_participation: Json | null
          event_segments: string[] | null
          id: string
          industry: string | null
          internal_notes: string | null
          level_id: string | null
          previous_sponsorships: Json | null
          reviewed_at: string | null
          reviewed_by: string | null
          signature_data: Json | null
          sponsor_id: string | null
          sponsorship_goals: string[] | null
          status: Database["public"]["Enums"]["application_status"] | null
          submitted_at: string | null
          target_audience: Json | null
          terms_accepted: boolean | null
          updated_at: string | null
          version: number | null
          website_links: Json | null
        }
        Insert: {
          company_background?: string | null
          company_tagline?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          contribution_details?: string | null
          contribution_range?: Json | null
          contribution_type?: string | null
          created_at?: string | null
          custom_branding_requests?: string | null
          custom_requests?: string | null
          event_id?: string | null
          event_participation?: Json | null
          event_segments?: string[] | null
          id?: string
          industry?: string | null
          internal_notes?: string | null
          level_id?: string | null
          previous_sponsorships?: Json | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          signature_data?: Json | null
          sponsor_id?: string | null
          sponsorship_goals?: string[] | null
          status?: Database["public"]["Enums"]["application_status"] | null
          submitted_at?: string | null
          target_audience?: Json | null
          terms_accepted?: boolean | null
          updated_at?: string | null
          version?: number | null
          website_links?: Json | null
        }
        Update: {
          company_background?: string | null
          company_tagline?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          contribution_details?: string | null
          contribution_range?: Json | null
          contribution_type?: string | null
          created_at?: string | null
          custom_branding_requests?: string | null
          custom_requests?: string | null
          event_id?: string | null
          event_participation?: Json | null
          event_segments?: string[] | null
          id?: string
          industry?: string | null
          internal_notes?: string | null
          level_id?: string | null
          previous_sponsorships?: Json | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          signature_data?: Json | null
          sponsor_id?: string | null
          sponsorship_goals?: string[] | null
          status?: Database["public"]["Enums"]["application_status"] | null
          submitted_at?: string | null
          target_audience?: Json | null
          terms_accepted?: boolean | null
          updated_at?: string | null
          version?: number | null
          website_links?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsorship_applications_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorship_applications_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorship_applications_level_id_fkey"
            columns: ["level_id"]
            isOneToOne: false
            referencedRelation: "sponsorship_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorship_applications_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorship_applications_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsorship_assets: {
        Row: {
          approval_date: string | null
          approved_by: string | null
          asset_type: string
          asset_url: string
          created_at: string | null
          file_metadata: Json | null
          id: string
          sponsor_id: string | null
          status: string | null
          updated_at: string | null
          validation_errors: string[] | null
          validation_status: string | null
        }
        Insert: {
          approval_date?: string | null
          approved_by?: string | null
          asset_type: string
          asset_url: string
          created_at?: string | null
          file_metadata?: Json | null
          id?: string
          sponsor_id?: string | null
          status?: string | null
          updated_at?: string | null
          validation_errors?: string[] | null
          validation_status?: string | null
        }
        Update: {
          approval_date?: string | null
          approved_by?: string | null
          asset_type?: string
          asset_url?: string
          created_at?: string | null
          file_metadata?: Json | null
          id?: string
          sponsor_id?: string | null
          status?: string | null
          updated_at?: string | null
          validation_errors?: string[] | null
          validation_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsorship_assets_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsorship_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_digital: boolean | null
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_digital?: boolean | null
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_digital?: boolean | null
          name?: string
        }
        Relationships: []
      }
      sponsorship_documents: {
        Row: {
          application_id: string | null
          content_type: string
          created_at: string | null
          document_type: string
          file_name: string
          id: string
          is_signed: boolean | null
          signature_required: boolean | null
          signed_at: string | null
          signed_by: string | null
          size: number
          storage_path: string
          updated_at: string | null
        }
        Insert: {
          application_id?: string | null
          content_type: string
          created_at?: string | null
          document_type: string
          file_name: string
          id?: string
          is_signed?: boolean | null
          signature_required?: boolean | null
          signed_at?: string | null
          signed_by?: string | null
          size: number
          storage_path: string
          updated_at?: string | null
        }
        Update: {
          application_id?: string | null
          content_type?: string
          created_at?: string | null
          document_type?: string
          file_name?: string
          id?: string
          is_signed?: boolean | null
          signature_required?: boolean | null
          signed_at?: string | null
          signed_by?: string | null
          size?: number
          storage_path?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsorship_documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "sponsorship_applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sponsorship_documents_signed_by_fkey"
            columns: ["signed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sponsorship_levels: {
        Row: {
          benefits: Json | null
          created_at: string | null
          description: string | null
          digital_assets: Json | null
          id: string
          is_active: boolean | null
          max_sponsors: number | null
          name: string
          price_range: Json | null
          type: Database["public"]["Enums"]["sponsorship_type"] | null
          updated_at: string | null
        }
        Insert: {
          benefits?: Json | null
          created_at?: string | null
          description?: string | null
          digital_assets?: Json | null
          id?: string
          is_active?: boolean | null
          max_sponsors?: number | null
          name: string
          price_range?: Json | null
          type?: Database["public"]["Enums"]["sponsorship_type"] | null
          updated_at?: string | null
        }
        Update: {
          benefits?: Json | null
          created_at?: string | null
          description?: string | null
          digital_assets?: Json | null
          id?: string
          is_active?: boolean | null
          max_sponsors?: number | null
          name?: string
          price_range?: Json | null
          type?: Database["public"]["Enums"]["sponsorship_type"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sponsorship_payments: {
        Row: {
          amount: number
          application_id: string | null
          created_at: string | null
          currency: string | null
          id: string
          invoice_number: string | null
          payment_date: string | null
          payment_method: string | null
          status: string
          stripe_payment_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          application_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          invoice_number?: string | null
          payment_date?: string | null
          payment_method?: string | null
          status: string
          stripe_payment_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          application_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          invoice_number?: string | null
          payment_date?: string | null
          payment_method?: string | null
          status?: string
          stripe_payment_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sponsorship_payments_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "sponsorship_applications"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_types: {
        Row: {
          benefits: Json | null
          capacity: number | null
          created_at: string | null
          currency: string | null
          description: string | null
          event_id: string | null
          id: string
          is_active_in_stripe: boolean | null
          is_recurring: boolean | null
          name: string
          price: number
          recurring_interval: string | null
          sale_end_date: string | null
          sale_start_date: string | null
          status: Database["public"]["Enums"]["ticket_type_status"] | null
          stripe_metadata: Json | null
          stripe_price_id: string | null
          stripe_product_id: string | null
          updated_at: string | null
        }
        Insert: {
          benefits?: Json | null
          capacity?: number | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          event_id?: string | null
          id?: string
          is_active_in_stripe?: boolean | null
          is_recurring?: boolean | null
          name: string
          price: number
          recurring_interval?: string | null
          sale_end_date?: string | null
          sale_start_date?: string | null
          status?: Database["public"]["Enums"]["ticket_type_status"] | null
          stripe_metadata?: Json | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          updated_at?: string | null
        }
        Update: {
          benefits?: Json | null
          capacity?: number | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          event_id?: string | null
          id?: string
          is_active_in_stripe?: boolean | null
          is_recurring?: boolean | null
          name?: string
          price?: number
          recurring_interval?: string | null
          sale_end_date?: string | null
          sale_start_date?: string | null
          status?: Database["public"]["Enums"]["ticket_type_status"] | null
          stripe_metadata?: Json | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_types_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_types_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          metadata: Json | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          price: number
          purchase_date: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["ticket_status"] | null
          ticket_type_id: string | null
          tier: Database["public"]["Enums"]["ticket_tier"]
          total_amount: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          metadata?: Json | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          price: number
          purchase_date?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          ticket_type_id?: string | null
          tier: Database["public"]["Enums"]["ticket_tier"]
          total_amount?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          metadata?: Json | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          price?: number
          purchase_date?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["ticket_status"] | null
          ticket_type_id?: string | null
          tier?: Database["public"]["Enums"]["ticket_tier"]
          total_amount?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_ticket_type_id_fkey"
            columns: ["ticket_type_id"]
            isOneToOne: false
            referencedRelation: "ticket_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      translation_reviews: {
        Row: {
          comments: string | null
          created_at: string | null
          id: string
          reviewer_id: string
          status: string
          translation_id: string
          updated_at: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string | null
          id?: string
          reviewer_id: string
          status: string
          translation_id: string
          updated_at?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string | null
          id?: string
          reviewer_id?: string
          status?: string
          translation_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "translation_reviews_translation_id_fkey"
            columns: ["translation_id"]
            isOneToOne: false
            referencedRelation: "content_translations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      active_events: {
        Row: {
          capacity: number | null
          cover_image: string | null
          created_at: string | null
          created_by: string | null
          date: string | null
          deleted_at: string | null
          description: string | null
          id: string | null
          is_deleted: boolean | null
          location: string | null
          status: Database["public"]["Enums"]["event_status"] | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          capacity?: number | null
          cover_image?: string | null
          created_at?: string | null
          created_by?: string | null
          date?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string | null
          is_deleted?: boolean | null
          location?: string | null
          status?: Database["public"]["Enums"]["event_status"] | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          capacity?: number | null
          cover_image?: string | null
          created_at?: string | null
          created_by?: string | null
          date?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string | null
          is_deleted?: boolean | null
          location?: string | null
          status?: Database["public"]["Enums"]["event_status"] | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      active_sponsorships: {
        Row: {
          agreement_details: Json | null
          company_name: string | null
          contribution_amount: number | null
          created_at: string | null
          end_date: string | null
          event_id: string | null
          id: string | null
          level_id: string | null
          level_name: string | null
          sponsor_id: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["sponsorship_status"] | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_sponsorships_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sponsorships_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sponsorships_level_id_fkey"
            columns: ["level_id"]
            isOneToOne: false
            referencedRelation: "sponsorship_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sponsorships_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "sponsor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      available_tickets: {
        Row: {
          created_at: string | null
          event_id: string | null
          event_title: string | null
          id: string | null
          metadata: Json | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          price: number | null
          purchase_date: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["ticket_status"] | null
          ticket_type_id: string | null
          ticket_type_name: string | null
          tier: Database["public"]["Enums"]["ticket_tier"] | null
          total_amount: number | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "active_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_ticket_type_id_fkey"
            columns: ["ticket_type_id"]
            isOneToOne: false
            referencedRelation: "ticket_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      unread_notifications: {
        Row: {
          action_url: string | null
          content: string | null
          created_at: string | null
          id: string | null
          read_at: string | null
          title: string | null
          type: Database["public"]["Enums"]["notification_type"] | null
          user_id: string | null
        }
        Insert: {
          action_url?: string | null
          content?: string | null
          created_at?: string | null
          id?: string | null
          read_at?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["notification_type"] | null
          user_id?: string | null
        }
        Update: {
          action_url?: string | null
          content?: string | null
          created_at?: string | null
          id?: string | null
          read_at?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["notification_type"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      check_and_update_promo_code: {
        Args: {
          p_code: string
          p_event_id: string
        }
        Returns: {
          is_valid: boolean
          discount_type: string
          discount_value: number
          message: string
        }[]
      }
      check_sponsorship_availability: {
        Args: {
          level_id: string
        }
        Returns: boolean
      }
      track_sponsor_engagement: {
        Args: {
          sponsor_id: string
          engagement_type: string
          engagement_data: Json
        }
        Returns: undefined
      }
    }
    Enums: {
      application_status:
        | "draft"
        | "submitted"
        | "under_review"
        | "approved"
        | "declined"
      audit_action: "INSERT" | "UPDATE" | "DELETE" | "SOFT_DELETE"
      contribution_type: "financial" | "in_kind" | "combination"
      event_category:
        | "Fashion Show"
        | "Gala"
        | "Workshop"
        | "Exhibition"
        | "Conference"
        | "Networking"
        | "Awards_Ceremony"
        | "Runway_Show"
        | "Masterclass"
        | "Pop_Up_Shop"
        | "VIP_Reception"
        | "Industry_Mixer"
        | "Designer_Showcase"
        | "Trend_Presentation"
      event_status: "draft" | "published" | "completed" | "cancelled"
      media_status: "draft" | "published"
      media_type: "gallery" | "highlights" | "promotional"
      message_status: "sent" | "delivered" | "read"
      notification_category: "events" | "tickets" | "messages" | "marketing"
      notification_type:
        | "event_update"
        | "ticket_purchase"
        | "message"
        | "system"
      payment_status: "pending" | "completed" | "failed" | "refunded"
      profile_status: "incomplete" | "complete"
      sponsor_industry:
        | "fashion"
        | "technology"
        | "beauty"
        | "lifestyle"
        | "food_and_beverage"
        | "media"
        | "retail"
        | "luxury"
        | "other"
      sponsor_status: "active" | "inactive"
      sponsorship_level: "gold" | "silver" | "bronze"
      sponsorship_status: "pending" | "approved" | "active" | "completed"
      sponsorship_type: "physical" | "digital" | "hybrid"
      ticket_status: "available" | "reserved" | "purchased" | "cancelled"
      ticket_tier: "general" | "vip"
      ticket_type_status: "active" | "inactive" | "sold_out"
      user_role: "admin" | "model" | "designer" | "sponsor" | "visitor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
