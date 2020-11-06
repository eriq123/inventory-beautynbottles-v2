@extends('layout.master')

@section('content')
<app-qr :items="{{$items}}" :route="{{$route}}"></app-qr>
@endsection

@section('js')
<script src="{{asset('./html2pdf.bundle.js')}}"></script>
@endsection