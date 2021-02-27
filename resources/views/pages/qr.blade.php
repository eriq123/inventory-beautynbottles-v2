@extends('layout.qr')

@section('css')
<style>
    body {
        padding: 0;
        margin: 0;
        background: white;
    }

    .page-break {
        page-break-after: always;
    }

    #qr-wrapper {
        text-align: center;
    }

    .qr-container {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        padding: 5px;
        margin: auto;
        max-width: 850px;
    }

    .qr-content {
        width: 25%;
        display: flex;
        flex-direction: column;
        padding: 10px 5px;
        margin: 10px auto;
    }

    .qr-box {
        margin-top: auto;
    }

    .qr-name {
        margin-bottom: 0.5em;
    }

    .header-container {
        margin: auto;
        margin-top: 10px;
        max-width: 850px;
        display: flex;
        justify-content: space-between;
    }
</style>
@endsection

@section('content')
<div class="header-container">
    <v-btn outlined id="back-btn">
        <v-icon left>mdi-arrow-left</v-icon>
        Back
    </v-btn>
    <v-btn outlined id="download-btn">
        <v-icon left>mdi-download</v-icon>
        PDF
    </v-btn>
</div>

<section id="qr-wrapper">
    @foreach ($items as $item)
    <h3 class="page-title">{{$item->category->name ?? 'N/A'}}</h3>

    @foreach ($item->items as $chunk)
    <div class="qr-container">
        @foreach ($chunk as $qr)
        <div class="qr-content">
            <p class="qr-name">{{$qr->name ?? 'N/A'}}</p>
            <qr-code value="{{$qr->qr_code ?? ''}}" class="qr-box"></qr-code>
        </div>
        @endforeach
    </div>

    @if ($loop->remaining !== 0)
    <div class="page-break"></div>
    <h3 class="page-title">{{$item->category->name ?? 'N/A'}}</h3>
    @endif

    @endforeach
    <div class="page-break"></div>
    @endforeach
</section>
@endsection

@section('js')
<script>
    $('#back-btn').click(function(){
      window.location.href = "/";
    });
    $('#download-btn').click(function(){
        $('.header-container').hide();
        window.print();
        setTimeout(function(){
            $('.header-container').show();
        }, 500);
    });
</script>
@endsection