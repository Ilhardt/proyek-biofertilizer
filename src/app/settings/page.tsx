'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import AccountSettingsCard from './../components/AccountSettingsCard';
import NotificationSettingsCard from './../components/NotificationSettingsCard';
import SystemPreferencesCard from './../components/SystemPreferencesCard';

export default function SettingsPage() {


    return (
        <div className="flex-1 p-6 bg-gray-100 min-h-[1200px] overflow-y-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">System Settings</h1>

            <AccountSettingsCard/>

            <NotificationSettingsCard
                emailAlerts={[]}
                setEmailAlerts={[]}
                smsAlerts={[]}
                setSmsAlerts={[]}
                criticalAlertsOnly={[]}
                setCriticalAlertsOnly={[]}
            />

            <SystemPreferencesCard
                theme={[]}
                setTheme={[]}
                dataRefreshRate={[]}
                setDataRefreshRate={[]}
            />
        </div>
    );
}