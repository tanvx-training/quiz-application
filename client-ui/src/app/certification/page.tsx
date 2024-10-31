import React from 'react'
import CertificationList from '../../components/CertificationList'

const CertificationPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CertificationList />
            </div>
        </div>
    )
}

export default CertificationPage